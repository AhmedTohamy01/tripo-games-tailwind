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
  py-[100px] xl1100:py-[0px]
  px-[15px] md:px-[100px]
  h-fit xl1100:h-[600px]
  flex-col xl1100:flex-row
  justify-center xl1100:justify-between
  items-center xl1100:items-start
  gap-[30px] xl1100:gap-[0px]
  relative
  bg-fixed
  bg-center
  bg-no-repeat
  bg-cover
  flex
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
`

const FormWrapper = `
  w-full sm480:w-[440px]
  mt-[0px] xl1100:mt-[-200px]
  bg-white
  p-[20px]
  rounded-[20px]
  h-fit
`

const EmailFormWrapper = `
  h-auto sm480:h-[260px]
  w-full sm480:w-[390px]
  mt-[0px] xl1100:mt-[160px]
  bg-[#da392b]
  text-white
  p-[24px]
  rounded-[20px]
`

const FormTitle = `
  text-[32px]
  font-[700]
  text-[#272443]
  mb-[20px]
`

const EmailFormTitle = `
  text-[21px] sm480:text-[24px]
  font-[700]
  mb-[30px]
`

const FormSubTitle = `
  text-[18px]
  mb-[30px]
`

const RowWrapper = `
  block md:flex
  gap-[20px]
  mb-[15px]
`

const SingleFieldWrapper = `
  w-full
`

const FieldWrapper = `
  w-full md:w-[50%]
  mb-[15px] md:mb-[0px]
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
  !h-[120px]
  !resize-none
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
  !rounded-[10px]
  !bg-[#272443]
  !text-white
  border-none
  text-base
  font-normal
  leading-[24px]
  w-full
  !h-[44px]
  mt-[10px]
  mb-[20px]
  hover:!bg-[#da392b]
  hover:!text-white
  focus:!bg-[#da392b]
  focus:!text-white
`

const JoinButton = `
  !rounded-[10px]
  !bg-[#fcff72]
  !text-[#272443]
  border
  border-[#fcff72]
  text-base
  font-normal
  leading-[24px]
  w-full
  !h-[44px]
  mt-[15px]
  mb-[20px]
  hover:!bg-[#f6f4f0]
  hover:!border-[#f6f4f0]
  hover:!text-[#272443]
  focus:!bg-[#f6f4f0]
  focus:!border-[#f6f4f0]
  focus:!text-[#272443]
`

export default GetInTouch
