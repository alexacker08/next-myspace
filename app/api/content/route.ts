import { NextResponse } from "next/server";

// Dummy data
const posts = [
    {
      title: 'Lorem Ipsum',
      slug: 'lorem-ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
];

export async function GET(){
    console.log('Get it please')
    return NextResponse.json(posts)
}