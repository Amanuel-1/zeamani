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
        // justifyContent:'center',
        alignItems:'center'
        }}
    >
        <h1  style={{ display:'flex',justifyContent:'center',textAlign:'center',minWidth:'25%',maxWidth:'35%',borderRadius:'50px',fontSize: '2rem' ,paddingLeft:'.8rem',paddingRight:'.8rem',paddingTop:'.6rem',paddingBottom:'.6rem',backgroundColor:'rgba(20,20,20,.8)',borderWidth:'2px',borderColor:'orange'}}>{website}</h1>
        <h1 tw="font-extrabold" style={{ width: '100%', fontSize: '4rem' ,paddingLeft:'2rem',paddingRight:'2rem',textAlign:'center'}}>{title??"Untitled Post"}</h1>
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
                bottom: '2rem',
                right:0,
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem',
                color: 'white',
                fontWeight: 'bold',
            }}
            >
           
            <span style={{ color: '#F3F0F6', fontSize: '1.5rem' }}>by {author??"Amanuel Garomsa "}</span>
            </div>

        </div>
        </div>
    </div>
);
}



