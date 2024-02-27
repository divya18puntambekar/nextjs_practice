import '@/assets/styles/global.css'
export const metadata = {
  title: 'My APP',
  description: 'first nextjs application',
  keywords: 'nextjs, javascript, react',
};
const layout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
        <div className="admin">{children}</div>
        </body>
    </html>
  )
}

export default layout