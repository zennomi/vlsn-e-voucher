import { FaTiktok, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

const Info = () => {
    return <div className="card card-border bg-slate-50">
        <div className="p-2 flex flex-col gap-y-2">
            <div className="flex justify-between">
                <div className="flex gap-x-2 text-base items-center">
                    <FaPhoneAlt />
                    <div>Hotline</div>
                </div>
                <a target="_blank" href="tel:+84365206368" className="text-emerald-500">036 520 6368</a>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-x-2 text-base items-center">
                    <FaFacebookF />
                    <div>Fanpage</div>
                </div>
                <a target="_blank" href="https://www.facebook.com/Vatlysieunham/" className="text-emerald-500">@vatlysieunham</a>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-x-2 text-base items-center">
                    <FaTiktok />
                    <div>Tiktok</div>
                </div>
                <a target="_blank" href="https://www.tiktok.com/@vatlysieunham" className="text-emerald-500">@vatlysieunham</a>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-x-2 text-base items-center">
                    <FaMapMarkerAlt />
                    <div>Cơ sở 1</div>
                </div>
                <a href="#" className="text-emerald-500">Số 10 Tạ Quang Bửu, Bách Khoa, Hà Nội</a>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-x-2 text-base items-center">
                    <FaMapMarkerAlt />
                    <div>Cơ sở 2</div>
                </div>
                <a href="#" className="text-emerald-500">Số 176 Xã Đàn 2, Đống Đa, Hà Nội</a>
            </div>
        </div>
    </div>
}

export default Info