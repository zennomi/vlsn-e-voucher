import { useState } from "react"
import Form from "./form"
import { Button, Dialog } from "../../components/ui"
import { FormValues } from "../../@types/common"
import { GiPartyPopper } from "react-icons/gi"
import Info from "./info"

const Home = () => {
    const [values, setValues] = useState<FormValues | null>()

    const onDialogClose = () => {
        setValues(null)
    }

    const onDialogOk = () => {
        setValues(null)
    }

    const handleSubmit = (values: FormValues) => {
        setValues(values)
    }

    return <>
        <div className="h-[100px] w-full bg-emerald-900 flex items-center justify-center p-3 text-center">
            <h2 className="text-white">Đăng ký nhận 3 buổi học gia sư miễn phí</h2>
        </div>
        <div className="container mt-5 mx-auto px-2">
            <div className=" bg-white card card-border">
                <div className="card-body">
                    <Form handleSubmit={handleSubmit} />
                </div>
            </div>
        </div>
        <Dialog
            isOpen={!!values}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            className="p-2"
        >
            <div className="flex flex-col h-full justify-between">
                <div className="overflow-y-auto text-center">
                    <GiPartyPopper className="text-[100px] mx-auto mb-2 text-emerald-600" />
                    <h5 className="">Chúc mừng {values?.name}</h5>
                    <p className="mb-2">
                        Em đã đăng ký thành công 3 buổi gia sư miễn phí tại Vật Lý Siêu Nhẩm.<br />
                        Để sử dụng voucher, em hãy liên lạc thông tin phía dưới để sử dụng Phiếu Học Gia Sư nhé!
                    </p>
                    <Info />
                </div>
                <div className="text-right mt-6">
                    <Button
                        className="ltr:mr-2 rtl:ml-2"
                        variant="plain"
                        onClick={onDialogClose}
                    >
                        Đóng
                    </Button>
                    <Button variant="solid" onClick={onDialogOk}>
                        Vâng ạ
                    </Button>
                </div>
            </div>
        </Dialog>
    </>
}

export default Home
