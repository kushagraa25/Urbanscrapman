import { shedule } from "../Modal/Shedule.js";

export const CreateShedule = async (req, res) => {
    try {
        if (!req.body || !req.body.weight || !req.body.pickUpDate || !req.body.timeSlot || !req.body.address || !req.body.pinCode || !req.body.landMark) return res.status(400).json({ "error": "All fields are required" });
        const result = await shedule.create(req.body);

        if (!result) return res.status(400).json({ "error": "Error in Create shedule" });
        return res.status(201).json({ "Message": "Sheduled a pickup Sucessfully" });
    } catch (e) {
        console.log(e)
        return res.status(500).json({ "error": "Error in Create shedule" });
    }
}

export const UpdateStatus = async (req, res) => {
    try {
        const id = req.params.id
        const result = await shedule.findByIdAndUpdate(id, { status: "Completed" })

        if (!result) return res.status(404).json({ "error": "Pickup Not Found" });
        return res.status(200).json({ "Message": "Pickup Updated Sucessfully" });

    } catch (e) {
        console.log(e)
        return res.status(500).json({ "error": "Error in Updating Pickup" });
    }
}

export const getAllShedules = async (req, res) => {
    try {
        const matchQuery = {};

        if (req.query.option != 'all') {
            matchQuery.status = req.query.option
        }


        console.log(req.query);
        console.log(matchQuery);

        const result = await shedule.aggregate([
            {
                $match: matchQuery
            },
            {
                $lookup : {
                    from : "users",
                    localField : 'createdBy',
                    foreignField : "_id",
                    as : 'createdBy'
                }
            },
            {
                $unwind : '$createdBy'
            },
            {
                $facet: {
                    metadata: [{ $count: "totalshedule" }],
                    data: [
                        { $sort: { createdAt: -1 } },
                        { $skip: (+req.query.page - 1) * (+req.query.limit) },
                        { $limit: +req.query.limit }
                    ]
                }
            }
        ]);

        const shedules = result[0].data;
        const totalSchedules = result[0].metadata.length > 0 ? result[0].metadata[0].totalshedule : 0;

        if (!shedules) return res.status(500).json({ "error": "Error in Getting Pickups" });
        return res.status(200).json({
            totalSchedules: totalSchedules,
            shedules: shedules
        });
    } catch (e) {
        console.log(e)
        return res.status(500).json({ "error": "Error in Getting Pickups" });
    }
}


export const getPersonalShedule = async (req, res) => {
    try {

        const result = await shedule.find({ createdBy: req.params.id });

        if (!result) return res.status(500).json({ "error": "Error in Getting Pickups" });
        return res.status(200).json(result);
    } catch (e) {
        console.log(e)
        return res.status(500).json({ "error": "Error in Getting Pickups" });
    }
}

export const getStatics = async (req, res) => {
    try {
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);

        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999);

        const stats = await shedule.aggregate([
            {
                $facet: {
                    totalSchedules: [
                        { $count: "total" }
                    ],
                    totalCompleted: [
                        { $match: { status: "Completed" } },
                        { $count: "total" }
                    ],
                    totalUpcoming: [
                        { $match: { status: "Upcoming" } },
                        { $count: "total" }
                    ],
                    totalToday: [
                        {
                            $match: {
                                pickUpDate: {
                                    $gte: todayStart.toISOString(),
                                    $lte: todayEnd.toISOString()
                                }
                            }
                        },
                        { $count: "total" }
                    ]
                }
            }
        ]);

        const result = {
            totalSchedules: stats[0]?.totalSchedules[0]?.total || 0,
            totalCompleted: stats[0]?.totalCompleted[0]?.total || 0,
            totalUpcoming: stats[0]?.totalUpcoming[0]?.total || 0,
            totalToday: stats[0]?.totalToday[0]?.total || 0
        };

        return res.status(200).json(result);;

    } catch (e) {
        console.log(e)
        return res.status(500).json({ "error": "Error in Getting Pickups" });
    }
}