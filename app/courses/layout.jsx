import GuardedPage from '@components/GuardedPage'

export default function userLayout({ children }) {
  return (
    <section>
<GuardedPage>{children}</GuardedPage>
    </section>
  )
}