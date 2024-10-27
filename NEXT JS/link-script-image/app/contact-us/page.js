import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script strategy='lazyOnload'>
        {`alert("Contact us and we are available 24/7");`}
      </Script>
      details of us
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact NEXT JS",
  description: "Contact us for any queries",
};
