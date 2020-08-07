import Link from 'next/link'
import { useRouter } from 'next/router'
import { List, Form, Button } from 'antd'
import { SmileFilled } from '@ant-design/icons'
import { getRates } from '~/schema/queries/rates'

const FormItem = Form.Item

const content = {
  marginTop: '100px',
}

export default function Apollo({ rates }) {
  const router = useRouter()

  return (
    <div style={content}>
      <div className='text-center mb-5'>
        <Link href='#'>
          <a className='logo mr-0'>
            <SmileFilled size={48} strokeWidth={1} />
          </a>
        </Link>

        <p className='mb-0 mt-3 text-disabled'>GraphQL Demo</p>
      </div>
      <div>
        <List
          size='large'
          header={<div>1 USD value in other currencies</div>}
          bordered
          dataSource={rates.slice(0, 20)}
          renderItem={(item) => <List.Item>{`${Math.round(item.rate * 10000) / 10000} ${item.currency}`}</List.Item>}
        />
        <Form layout='horizontal'>
          <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
            <Button size='large' type='primary' htmlType='submit' onClick={() => { router.back() }}>
              Back
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

Apollo.getInitialProps = async () => {
  let rates = []
  try {
    rates = await getRates()
  } catch (error) {
    console.tron.error('Rates Query Error', error)
  }

  return {
    rates,
  }
}
