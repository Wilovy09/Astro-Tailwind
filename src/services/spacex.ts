import { type Doc , type APISpaceXLaunches } from '../types/api';

export const getLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc',
                },
                limit: 12
            }
        })
    });
    const { docs: launches } = (await res.json()) as APISpaceXLaunches
    return launches;
}

export const getLauncheBy = async ({id}: {id: String}) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
    
    const launch = (await res.json()) as Doc
    return launch;
}