// app/strava/page.tsx
"use client";

import React, { useEffect, useState } from 'react';

type StravaActivity = {
    badge_type_id: number,
    bio: string,
    city: string,
    country: string,
    created_at: string,
    firstname: string,
    follower: string,
    friend: string,
    id: number,
    lastname: string,
    premium: boolean,
    profile: string,
    profile_medium: string,
    resource_state: number,
    sex: string,
    state: string,
    summit: boolean,
    updated_at: string,
    username: string,
    weight: string
};



const StravaPage: React.FC = () => {
    const [activities, setActivities] = useState<StravaActivity[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStravaData = async () => {
            try {
                const response = await fetch('/api/strava');
                if (!response.ok) {
                    throw new Error('Failed to fetch activities');
                }
                const data = await response.json();
                setActivities(data);  // 活動データをセット
                // console.log(data);  // データの確認
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStravaData();
    }, []);

    console.log(activities);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Strava Activities</h1>

            {/* {activities.map((activity) => (
                    <li key={activity.id}>
                        <p>Name: {activity.firstname}</p>
                        <p>Lastname: {activity.lastname}</p>
                    </li>
                ))} */}
            {
                <p>ID: {activities.id}</p>
            }

        </div>
    );
};

export default StravaPage;