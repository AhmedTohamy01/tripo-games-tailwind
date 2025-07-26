'use client'
import { Button, Form, Input, notification } from 'antd'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { isEmailValid } from '@/utils/helpers'

/*---> Component <---*/
function GetInTouch() {
  const ref = useRef(null)
  const emailFormRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [contactForm] = Form.useForm()
  const [emailForm] = Form.useForm()
  const [api, contextHolder] = notification.useNotification()

  async function handleSuccessfulSave(values: any): Promise<void> {
    console.log('Success values:', values)

    if (!isEmailValid(values.email)) {
      api['error']({ message: 'Invalid email' })
      return
    }
  }

  function handleFailedSave(errorInfo: any): void {
    console.log('Failed:', errorInfo)
    api['warning']({ message: 'Please fill all required fields' })
  }

  return (
    <div
      className={MainWrapper}
      style={{ backgroundImage: "url('/images/newsletter-background.png')" }}
    >
      {contextHolder}
      <motion.div
        ref={ref}
        className={FormWrapper}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <div className={FormTitle}>Get in Touch</div>
        <div className={FormSubTitle}>
          I'm a paragraph. Click here to add your own text and edit me.
        </div>
        <Form
          form={contactForm}
          id={'contactForm'}
          onFinish={handleSuccessfulSave}
          onFinishFailed={handleFailedSave}
          autoComplete='off'
        >
          <div className={RowWrapper}>
            <div className={FieldWrapper}>
              <div className={Label}>
                First Name <span className={RedStar}>*</span>
              </div>
              <div className={InputWrapper}>
                <Form.Item
                  name='name'
                  rules={[{ required: true, message: '' }]}
                >
                  <Input className={StyledInput} allowClear />
                </Form.Item>
              </div>
            </div>
            <div className={FieldWrapper}>
              <div className={Label}>
                Last Name <span className={RedStar}>*</span>
              </div>
              <div className={InputWrapper}>
                <Form.Item
                  name='company'
                  rules={[{ required: true, message: '' }]}
                >
                  <Input className={StyledInput} allowClear />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className={RowWrapper}>
            <div className={SingleFieldWrapper}>
              <div className={Label}>
                Email <span className={RedStar}>*</span>
              </div>
              <div className={InputWrapper}>
                <Form.Item
                  name='email'
                  rules={[{ required: true, message: '' }]}
                >
                  <Input className={StyledInput} allowClear />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className={RowWrapper}>
            <div className={TextAreaWrapper}>
              <div className={Label}>
                Message <span className={RedStar}>*</span>
              </div>
              <div className={InputWrapper}>
                <Form.Item
                  name='message'
                  rules={[{ required: true, message: '' }]}
                >
                  <Input.TextArea className={StyledTextArea} />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className={ButtonWrapper}>
            <Button className={SubmitButton} type='primary' htmlType='submit'>
              Submit
            </Button>
          </div>
        </Form>
      </motion.div>
      <motion.div
        ref={emailFormRef}
        className={EmailFormWrapper}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <div className={EmailFormTitle}>Subscribe to Our Newsletter</div>
        <Form
          form={emailForm}
          id={'emailForm'}
          onFinish={handleSuccessfulSave}
          onFinishFailed={handleFailedSave}
          autoComplete='off'
        >
          <div className={SingleFieldWrapper}>
            <div className={EmailLabel}>Email *</div>
            <div className={InputWrapper}>
              <Form.Item name='email' rules={[{ required: true, message: '' }]}>
                <Input className={StyledInput} allowClear />
              </Form.Item>
            </div>
          </div>
          <Button className={JoinButton} type='primary' htmlType='submit'>
            Join
          </Button>
        </Form>
      </motion.div>
    </div>
  )
}

/*---> styles <---*/
const MainWrapper = `
  relative
  bg-center
  bg-no-repeat
  bg-cover
  h-[600px]
  px-[100px]
  flex
  justify-between
  z-0
  before:content-['']
  before:absolute
  before:top-0
  before:right-0
  before:bottom-0
  before:left-0
  before:bg-black/50
  before:z-[1]
  [&>*]:relative
  [&>*]:z-[2]
  xl:px-[50px]
  xl:h-fit
  xl:flex-col
  xl:justify-center
  xl:items-center
  xl:gap-[30px]
  xl:py-[100px]
  md:px-[15px]
`

const FormWrapper = `
  w-[440px]
  bg-white
  p-5
  rounded-[20px]
  -mt-[200px]
  h-fit
  xl:mt-0
  sm:w-full
`

const EmailFormWrapper = `
  w-[390px]
  h-[260px]
  bg-[#da392b]
  text-white
  p-6
  rounded-[20px]
  mt-[160px]
  xl:mt-0
  sm:w-full
  sm:h-auto
`

const FormTitle = `
  text-[32px]
  font-bold
  text-[#272443]
  mb-5
`

const EmailFormTitle = `
  text-2xl
  font-bold
  mb-[30px]
  sm:text-[21px]
`

const FormSubTitle = `
  text-lg
  mb-[30px]
`

const RowWrapper = `
  flex
  gap-5
  mb-[15px]
  md:block
`

const SingleFieldWrapper = `
  w-full
`

const FieldWrapper = `
  w-1/2
  md:w-full
  md:mb-[15px]
`

const TextAreaWrapper = `
  w-full
  mb-[30px]
`

const Label = `
  text-base
  font-normal
  text-[#101010]
  mb-[5px]
`

const EmailLabel = `
  text-base
  font-normal
  text-white
  mb-[5px]
`

const InputWrapper = `
  h-[43px]
`

const StyledInput = `
  h-[43px]
  text-base
  font-normal
`

const StyledTextArea = `
  h-[120px]
  resize-none
  text-base
  font-normal
`

const ButtonWrapper = `
  mt-[80px]
`

const RedStar = `
  text-red-500
`

const SubmitButton = `
  rounded-[10px]
  bg-[#272443]
  text-white
  border-none
  text-base
  font-normal
  leading-6
  w-full
  h-[44px]
  mt-[10px]
  mb-5
  hover:bg-[#da392b]
  hover:text-white
  focus:bg-[#da392b]
  focus:text-white
  sm:w-full
`

const JoinButton = `
  rounded-[10px]
  bg-[#fcff72]
  text-[#272443]
  border
  border-[#fcff72]
  text-base
  font-normal
  leading-6
  w-full
  h-[44px]
  mt-[15px]
  mb-5
  hover:bg-[#f6f4f0]
  hover:border-[#f6f4f0]
  hover:text-[#272443]
  focus:bg-[#f6f4f0]
  focus:border-[#f6f4f0]
  focus:text-[#272443]
  sm:w-full
`

export default GetInTouch
