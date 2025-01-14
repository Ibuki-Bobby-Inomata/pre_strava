// app/api/strava/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://www.strava.com/api/v3/athlete', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.STRAVA_ACCESS_TOKEN}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error response from Strava API:', errorData);
            return NextResponse.json({ error: errorData.message }, { status: 500 });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error in API Route:', error);
        return NextResponse.json({ error: 'Failed to fetch activities' }, { status: 500 });
    }
}
