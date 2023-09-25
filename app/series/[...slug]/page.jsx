import { notFound } from 'next/navigation';
import { getDetail } from '@/data/movies';
import Banner from '@/components/banner';

// SEO //
export async function generateMetadata({ params }) {
    const movie = await getDetail('tv/' + Number(params.slug))
    
    if (movie.success === false) { notFound() }

    return {
        title: movie.name,
        description: movie.overview,
    };
}
// SEO //

async function SeriesSinglePage({ params }) {
    const movie = await getDetail('tv/' + Number(params.slug))

    return (
        <>
            <Banner movie={movie} isSingle={true} isSeries={true} />
        </>
    )
}

export default SeriesSinglePage