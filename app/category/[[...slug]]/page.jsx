import React from 'react'
import { getCategoryList, getGenres } from '@/data/movies';
import { notFound } from 'next/navigation';
import Movies from '@/components/movies';

// SEO start //
export async function generateMetadata({ params }) {
  // url'de movies ve series dışında bir parametre gelirse notfound sayfasına gönderir
  if (params.slug[0] !== 'movies' && params.slug[0] !== 'series') { notFound() }

  const { genres } = await getGenres(params.slug[0] === 'series' ? 'tv' : 'movie')
  const catTitle = genres.find(item => item.id === Number(params.slug[1]) && item.name)
  // getGenres isteğinden sonra gelen cevap içinde arama yapıldı eğer parametre olarak gelen id ile eşleşen yoksa notfounda yönlendirildi
  if (!catTitle) { notFound() }

  return {
    title: `${catTitle.name} ${params.slug[0] === 'series' ? 'Dizileri' : 'Filmleri'}`,
  };
}
// SEO end //

async function CategoryPage({ params }) {
  const [
    { results },
    { genres }
  ] = await Promise.all([
    getCategoryList(params.slug[0] === 'series' ? 'tv' : 'movie', params.slug[1].toString()),
    getGenres(params.slug[0] === 'series' ? 'tv' : 'movie')
  ])
  // Movies componentine başlık olarak gidicek kategori başlığı
  const catTitle = genres.find(item => item.id === Number(params.slug[1]))
  // result yoksa notfounda yönlendirildi
  if (!results) { notFound() }

  return (
    <div style={{ marginTop: '130px' }}>
      <Movies movies={results} catTitle={catTitle.name + ' Kategorisi'} isSeries={params.slug[0] === 'series' ? true : false} isCategory={true} />
    </div>
  )
}

export default CategoryPage