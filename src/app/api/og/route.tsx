import { getDomainName } from "fireup/lib/utils";
import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";
import { urlForImage } from "fireup/lib/image";


export  function GET(req: NextRequest) {
const params = req.nextUrl.searchParams;
const author = params.get('author');
const title = params.get('title');
const image = params.get('image');
const avatar = params.get('avatar');

const website = getDomainName()
return new ImageResponse(
    <div
    style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F2937',
    }}
    >
    <div
        style={{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#F3F4F6',
        display: 'flex',
        width: '100%',
        height: '100%',
        }}
    >
        <img
        height="400"
        width="399"
        style={{
            height: '100%',
            width: '100%',
            zIndex: 20,
        }}
        src={image??"https://user-images.githubusercontent.com/71079278/275351091-bf163aa6-a4d0-4022-9ef4-917e0e1bcfb2.png"}
        alt="Post cover image"
        />
    </div>
    <div
        style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '190%',
        height: '100%',

        background: 'linear-gradient(to right top, #170c08, rgba(5, 0, 0, .8))',
        backdropFilter: 'blur(60px)',

        }}
    ></div>

    <div
        style={{
        position: 'absolute',
        top: '8rem',
        left: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '-2rem',
        width: '100%',
        height: '100%',
        color: 'white',
        fontWeight: 'bold',
        }}
    >
        <h1 tw="font-extrabold" style={{ width: '60%', fontSize: '4rem' }}>{title??"Untitled Post"}</h1>
        <h1  style={{ display:'flex',justifyContent:'center',textAlign:'center',minWidth:'25%',maxWidth:'35%',borderRadius:'50px',fontSize: '2rem' ,paddingLeft:'.8rem',paddingRight:'.8rem',paddingTop:'.6rem',paddingBottom:'.6rem',backgroundColor:'rgba(40,30,30,.8)'}}>{website}</h1>
    </div>
        <div
            style={{
            position: 'absolute',
            top: '0rem',
            left: '0rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '-2rem',
            width: '100%',
            height: '100%',
            color: 'white',
            fontWeight: 'bold',
            
            }}
        >
        <div style={{
            width:'100%',

            height:'100%',
            position:'relative',
            display:'flex'
            
        }} tw="">

            <div
            style={{
                position: 'absolute',
                bottom: '4rem',
                left: '20%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem',
                color: 'white',
                fontWeight: 'bold',
            }}
            >
            <span style={{ marginBottom: '.5rem', borderRadius: '50%' }}>
                <img
                src={avatar as string ?? 'https://media.licdn.com/dms/image/D4D03AQFhYXOlndUMyA/profile-displayphoto-shrink_200_200/0/1689808459339?e=1706140800&v=beta&t=B8314U4DPcI2tcYX6MHTCqBfbQ3v681G8YP_hNx0Gvg'}
                style={{ height: '5rem', width: '5rem', borderRadius: '50%', border: '4px solid #F3F4F6' }}
                />
            </span>
            <span style={{ color: '#F3F4F6', fontSize: '1.5rem' }}>{author??"Amanuel Garomsa "}[author]</span>
            </div>

        </div>
        </div>
    </div>
);
}



