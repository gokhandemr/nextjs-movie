export const metadata = {
  title: 'Sayfa Bulunamadı',
}
export default function NotFound() {
  return (
    <div className='notFound'>
      <div className="container">
        <h2>Aradığınız sayfa bulunamadı</h2>
        <p>Malesef aramanızla eşleşen sonuç bulunmamakta..</p>
      </div>
    </div>
  )
}