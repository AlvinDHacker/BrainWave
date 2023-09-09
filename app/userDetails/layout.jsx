import Footer from '@components/Footer'
import GuardedPage from '@components/GuardedPage'

export default function userLayout({ children }) {
  return (
    <section>
<GuardedPage>{children}</GuardedPage>
      <Footer />
    </section>
  )
}
