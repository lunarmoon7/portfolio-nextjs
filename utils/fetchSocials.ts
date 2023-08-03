import { Social } from '../typings';

export const fetchSocials = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`,
    { next: { revalidate: 120 }});

    const data = await res.json();
    console.log(data);
    const socials: Social[] = data.socials;

    // console.log('fetching', socials);
    
    return socials;
}