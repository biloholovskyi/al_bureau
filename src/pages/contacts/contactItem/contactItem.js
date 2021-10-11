import React from 'react'

import * as Style from './styled'

const ContactItem = ({data}) => {
	return (
		<Style.Item>
      <div className="name">{data.name}</div>

      {
        data.type === 'phone' && <a href={'tel:' + data.contact.replace(/[^\d]/g, '')} className="contact">{data.contact}</a>
      }

      {
        data.type === 'email' && <a href={'mailto:' + data.contact} className="contact">{data.contact}</a>
      }

      {
        data.type === 'text' && <div className="contact">{data.contact}</div>
      }

		</Style.Item>
	)
}

export default ContactItem