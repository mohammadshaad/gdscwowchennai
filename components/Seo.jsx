import Head from "next/head";

let SeoComponent = ({ title, description, image }) => {
    return (<Head>
        <title>
            {title}
        </title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="image" content={image} />
        <meta property="og:image" content={image} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Student Networking, GoogleStudents, CampusConnect" />
        <meta name="robots" content="index, follow" />
    </Head>)
}

export default SeoComponent