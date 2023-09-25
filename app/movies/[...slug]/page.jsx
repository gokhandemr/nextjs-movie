import { notFound } from 'next/navigation';
import { getDetail } from '@/data/movies';
import Banner from '@/components/banner';


// SEO //
export async function generateMetadata({ params }) {
    const movie = await getDetail('movie/' + Number(params.slug))

    if (movie.success === false) { notFound() }

    return {
        title: movie.title,
        description: movie.overview,
    };
}
// SEO //

async function SinglePage({ params }) {
    const movie = await getDetail('movie/' + Number(params.slug))
    return (
        <>
            <Banner movie={movie} isSingle={true} />
        </>
    )
}

export default SinglePage