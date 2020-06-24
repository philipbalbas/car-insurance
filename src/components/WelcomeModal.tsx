import React, { useState } from "react"
import {
  Modal,
  Steps,
  Input,
  Form,
  Button,
  Carousel,
  Radio,
  InputNumber,
  Select,
  Tooltip,
} from "antd"
import { useResponsive } from "ahooks"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faExclamationCircle,
  faStopwatch,
  faUserSecret,
} from "@fortawesome/pro-light-svg-icons"

const { Item } = Form
const { Step } = Steps

interface Props {
  visible: boolean
  handleSubmit(): void
}

const WelcomeModal = ({ visible, handleSubmit }: Props) => {
  const [step, setStep] = useState(0)
  const responsive = useResponsive()
  const [form] = Form.useForm()
  const [insurer, setInsurer] = useState("")

  let nextStep = () => setStep(step + 1)

  let isMd = responsive.md

  let modalStyle = isMd
    ? {}
    : {
        maxWidth: "100vw",
        height: "100vh",
        top: 0,
        margin: 0,
      }

  let handleSelectClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInsurer(e.currentTarget.value)
    nextStep()
  }

  return (
    <Modal
      visible={visible}
      closable={false}
      width={isMd ? 680 : "100%"}
      bodyStyle={{ padding: 0 }}
      footer={null}
      style={modalStyle}
    >
      <div className="bg-gray-200 p-5 md:px-10">
        <div className="flex justify-center align-center mb-5">
          <Steps
            className="w-2/3 md:w-5/12 flex-row justify-center items-center mx-auto"
            current={step}
            direction="horizontal"
            size="small"
          >
            <Step></Step>
            <Step></Step>
            <Step></Step>
          </Steps>
        </div>
        {step === 0 && (
          <div className="flex flex-col md:flex-row">
            <div className="mx-auto md:m-0 md:pr-8">
              <img
                src="https://images.top10.com/f_auto,q_auto/v1/production/rich-text/uploads/photo/Erika (1).20200119092120.png"
                className="rounded-full shadow-xl h-12 w-12 md:h-24 md:w-24 md:mx-auto"
              />
            </div>
            <div className="">
              <div className="text-xl md:text-2xl text-center md:text-left w-56 md:w-full mx-auto mb-2">
                Hi I'm Erika I'll find you{" "}
                <div className="font-semibold">
                  the cheapest car insurance quotes!
                </div>
              </div>
              <div className="flex justify-between max-w-sm md:max-w-full mx-auto border-t border-solid border-gray-300 md:border-none pt-2 md:pt-0">
                <div className="text-xs flex items-center">
                  <FontAwesomeIcon
                    className="h-4 w-4 mr-1"
                    icon={faStopwatch}
                  />{" "}
                  It takes only 30 seconds
                </div>
                <div className="text-xs flex items-center">
                  <FontAwesomeIcon
                    className="h-4 w-4 mr-1"
                    icon={faUserSecret}
                  />{" "}
                  No personal details required
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="flex items-center pl-4">
            <div className="pr-2 flex-shrink-0 md:pr-4">
              <img
                src="https://images.top10.com/f_auto,q_auto/v1/production/rich-text/uploads/photo/Erika (1).20200119092120.png"
                className="rounded-full shadow-xl h-12 w-12 md:h-16 md:w-16"
              />
            </div>
            <div>
              <div className="text-base md:text-2xl font-semibold">
                Who currently insures your car?
              </div>
              <div className="text-xs md:text-sm">
                We don't want to give you an offer you already have?{" "}
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="flex items-center pl-4">
            <div className="pr-2 flex-shrink-0 md:pr-4">
              <img
                src="https://images.top10.com/f_auto,q_auto/v1/production/rich-text/uploads/photo/Erika (1).20200119092120.png"
                className="rounded-full shadow-xl h-12 w-12 md:h-16 md:w-16"
              />
            </div>
            <div>
              <div className="text-base md:text-2xl font-semibold">
                Just a few final questions...
              </div>
              <div className="text-xs md:text-sm">
                The more we know, the better your quotes!
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {step === 0 && (
          <div className="py-4 px-8 md:py-8 flex flex-col items-center">
            <div className="text-xl md:text-2xl font-semibold">
              What's your zip code?
            </div>
            <div className="text-xs md:text-sm mb-4 md:mb-6">
              knowing your location will help us personalize your results.
            </div>
            <Form
              form={form}
              layout={isMd ? "inline" : "vertical"}
              className="w-full md:w-auto"
            >
              <Item
                className="m-0 mb-4 md:mb-0 md:mr-4 md:w-48"
                rules={[
                  {
                    required: true,
                    message: "Zip Code must be a 5 digit number",
                  },
                ]}
              >
                <Input placeholder="Zip Code" className="text-center text-xl" />
              </Item>
              <Item className="m-0 md:w-48">
                <Button
                  onClick={nextStep}
                  type="primary"
                  size="large"
                  block
                  className="text-lg font-semibold"
                >
                  Get Started
                </Button>
              </Item>
            </Form>
          </div>
        )}
        {step === 1 && (
          <div className="flex flex-wrap justify-center pb-8">
            <Button
              onClick={handleSelectClick}
              value="aaa"
              className="h-12 w-2/5 md:w-3/12 m-3 flex justify-center items-center"
            >
              <img src="https://umbrella.data.naturalint.com/production/sites/uploads/photo/CI-LogoQ2AAA.20190929101010.png" />
            </Button>
            <Button
              onClick={handleSelectClick}
              value="allstate"
              className="h-12 w-2/5 md:w-3/12 m-3 flex justify-center items-center"
            >
              <img src="https://umbrella.data.naturalint.com/production/sites/uploads/photo/CI-LogoQ2AllState.20190929101010.png" />
            </Button>
            <Button
              onClick={handleSelectClick}
              value="farmers"
              className="h-12 w-2/5 md:w-3/12 m-3 flex justify-center items-center"
            >
              <img src="https://umbrella.data.naturalint.com/production/sites/uploads/photo/CI-LogoQ2Farmers.20190929101010.png" />
            </Button>
            <Button
              onClick={handleSelectClick}
              value="geico"
              className="h-12 w-2/5 md:w-3/12 m-3 flex justify-center items-center"
            >
              <img src="https://umbrella.data.naturalint.com/production/sites/uploads/photo/CI-LogoQ2GEICO.20190929101010.png" />
            </Button>
            <Button
              onClick={handleSelectClick}
              value="libery"
              className="h-12 w-2/5 md:w-3/12 m-3 flex justify-center items-center"
            >
              <img src="https://umbrella.data.naturalint.com/production/sites/uploads/photo/CI-LogoQ2LibertyMutual.20190929101010.png" />
            </Button>
            <Button
              onClick={handleSelectClick}
              value="nationwide"
              className="h-12 w-2/5 md:w-3/12 m-3 flex justify-center items-center"
            >
              <img src="https://umbrella.data.naturalint.com/production/sites/uploads/photo/CI-LogoQ2Nationwide.20190929101010.png" />
            </Button>
            <Button
              onClick={handleSelectClick}
              value="progressive"
              className="h-12 w-2/5 md:w-3/12 m-3 flex justify-center items-center"
            >
              <img src="https://umbrella.data.naturalint.com/production/sites/uploads/photo/CI-LogoQ2Progressive.20190929101010.png" />
            </Button>
            <Button
              onClick={handleSelectClick}
              value="statefarm"
              className="h-12 w-2/5 md:w-3/12 m-3 flex justify-center items-center"
            >
              <img src="https://umbrella.data.naturalint.com/production/sites/uploads/photo/CI-LogoQ2StateFarm.20190929101010.png" />
            </Button>
            <Button
              onClick={handleSelectClick}
              value="usaa"
              className="h-12 w-2/5 md:w-3/12 m-3 flex justify-center items-center"
            >
              <img src="https://umbrella.data.naturalint.com/production/sites/uploads/photo/CI-LogoQ2USAA.20190929101010.png" />
            </Button>
            <Button
              onClick={handleSelectClick}
              value="other"
              className="h-12 w-2/5 md:w-2/5 m-3 flex justify-center items-center"
            >
              Other
            </Button>
            <Button
              onClick={handleSelectClick}
              value="none"
              className="h-12 w-3/4 md:w-2/5  m-3 flex justify-center items-center"
            >
              Not Insured Yet
            </Button>
          </div>
        )}
        {step === 2 && (
          <div className="flex justify-center w-3/4 md:w-full mx-auto py-8 md:px-10">
            <Form className="w-full md:flex md:flex-wrap">
              <Item className="md:m-0 md:pb-8 md:w-2/4 md:border-r md:pr-4">
                <div className="flex justify-between items-center">
                  <label>Do you own your own home?</label>
                  <Radio.Group style={{ minWidth: 120 }}>
                    <Radio.Button value="yes" className="w-3/6 text-center">
                      Yes
                    </Radio.Button>
                    <Radio.Button value="no" className="w-3/6 text-center">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </div>
              </Item>
              <Item className="md:m-0 md:pb-8 md:w-2/4 md:pl-4">
                <div className="flex justify-between items-center">
                  <label>Do you have an active license?</label>
                  <Radio.Group style={{ minWidth: 120 }}>
                    <Radio.Button value="yes" className="w-3/6 text-center">
                      Yes
                    </Radio.Button>
                    <Radio.Button value="no" className="w-3/6 text-center">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </div>
              </Item>
              <Item className="md:m-0 md:pb-8 md:w-2/4 md:border-r md:pr-4">
                <div className="flex justify-between items-center">
                  <label>What year were you born?</label>
                  <InputNumber placeholder="Year" style={{ minWidth: 120 }} />
                </div>
              </Item>
              <Item className="md:m-0 md:pb-8 md:w-2/4 md:pl-4">
                <div className="flex justify-between items-center">
                  <label>Accidents or tickets in the past 3 years?</label>
                  <Radio.Group style={{ minWidth: 120 }}>
                    <Radio.Button value="yes" className="w-3/6 text-center">
                      Yes
                    </Radio.Button>
                    <Radio.Button value="no" className="w-3/6 text-center">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </div>
              </Item>
              <Item className="md:m-0 md:pb-8 md:w-2/4 md:border-r md:pr-4">
                <div className="flex justify-between items-center">
                  <label>What's your credit score?</label>
                  <Select
                    style={{ maxWidth: "120px" }}
                    dropdownMatchSelectWidth={180}
                  >
                    <Select.Option value="excellent" className="text-xs">
                      Excellent - Above 749
                    </Select.Option>
                    <Select.Option value="good" className="text-xs">
                      Good - 700-749
                    </Select.Option>
                    <Select.Option value="average" className="text-xs">
                      Average - 650-699
                    </Select.Option>
                    <Select.Option value="below-average" className="text-xs">
                      Below Average - 550-649
                    </Select.Option>
                    <Select.Option value="poor" className="text-xs">
                      Poor - Under 550
                    </Select.Option>
                  </Select>
                </div>
              </Item>
              <Item className="md:m-0 md:pb-8 md:w-2/4 md:pl-4">
                <div className="flex justify-between items-center">
                  <label>
                    Have you ever had a DUI?{" "}
                    <Tooltip
                      title="DUI: conviction for driving under the influence"
                      className="cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faExclamationCircle} />
                    </Tooltip>
                  </label>
                  <Radio.Group style={{ minWidth: 120 }}>
                    <Radio.Button value="yes" className="w-3/6 text-center">
                      Yes
                    </Radio.Button>
                    <Radio.Button value="no" className="w-3/6 text-center">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </div>
              </Item>
              <Item className="md:m-0 md:pb-8 md:w-2/4 md:pr-4">
                <div className="flex justify-between items-center">
                  <label>
                    Do you have an SR-22?{" "}
                    <Tooltip
                      title="SR-22: in most states, this is a legal requirement for drivers who have been convicted for a traffic-related offense"
                      className="cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faExclamationCircle} />
                    </Tooltip>
                  </label>
                  <Radio.Group style={{ minWidth: 120 }}>
                    <Radio.Button value="yes" className="w-3/6 text-center">
                      Yes
                    </Radio.Button>
                    <Radio.Button value="no" className="w-3/6 text-center">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </div>
              </Item>
              <Item className="md:m-0 md:pb-8 md:w-full md:text-center">
                <Button
                  type="primary"
                  size="large"
                  block={!isMd}
                  className="text-lg font-semibold md:mx-auto md:w-56"
                  onClick={handleSubmit}
                >
                  View Quotes
                </Button>
              </Item>
            </Form>
          </div>
        )}
      </div>
      {step === 0 && (
        <div className="bg-gray-200 p-5 text-center">
          <div className="text-xs">
            All the top insurance companies. All in one place
          </div>
          <Carousel arrows>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </div>
      )}
    </Modal>
  )
}

export default WelcomeModal
