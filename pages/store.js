import Link from 'next/link'
import { useRouter } from 'next/router'
import { Form, Switch, Button } from 'antd'
import { SmileFilled } from '@ant-design/icons'
import { useStores } from '~/store'

const FormItem = Form.Item

const content = {
  marginTop: '100px',
}

export default function Store() {
  const router = useRouter()
  const { testStore } = useStores()

  const onChange = (checked) => {
    testStore.toggle(checked)
  }

  return (
    <div style={content}>
      <div className='text-center mb-5'>
        <Link href='#'>
          <a className='logo mr-0'>
            <SmileFilled size={48} strokeWidth={1} />
          </a>
        </Link>

        <p className='mb-0 mt-3 text-disabled'>Welcome to the world !</p>
      </div>
      <div>
        <Form layout='horizontal'>
          <FormItem label='Switch' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
            <Switch defaultChecked={testStore.checked} name='switch' onChange={onChange} />
          </FormItem>

          <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
            <Button size='large' type='primary' htmlType='submit' onClick={() => { router.push('apollo') }}>
              Next
            </Button>
            <Button size='large' style={{ marginLeft: 8 }} onClick={() => { router.back() }}>
              Back
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}
