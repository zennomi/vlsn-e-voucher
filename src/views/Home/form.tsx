
import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Field, FieldProps, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Select } from '../../components/ui'
import { FormValues } from '../../@types/common'

const validationSchema = Yup.object<FormValues>().shape({
    name: Yup.string().required('Điền đầy đủ đi mà 😭'),
    school: Yup.string().required('Điền đầy đủ đi mà 😭'),
    phone: Yup.string().matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, "Điền đúng số điện thoại nhó").required('Điền đầy đủ đi mà 😭'),
    grade: Yup.number().min(8).max(12),
})


const EVoucherForm = ({ handleSubmit }: { handleSubmit: (values: FormValues) => void }) => {
    const initialValues: FormValues = {
        name: '',
        phone: '',
        school: '',
        grade: 11,
    }

    const options = [
        { value: 8, label: 'Lớp 8' },
        { value: 9, label: 'Lớp 9' },
        { value: 10, label: 'Lớp 10' },
        { value: 11, label: 'Lớp 11' },
        { value: 12, label: 'Lớp 12' },
    ]

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ touched, errors, values }) => (
                    <Form>
                        <FormContainer>
                            <FormItem
                                asterisk
                                label="Họ và tên"
                                invalid={errors.name && touched.name}
                                errorMessage={errors.name}
                            >
                                <Field
                                    type="name"
                                    name="name"
                                    placeholder="Họ và tên"
                                    component={Input}
                                />
                            </FormItem>

                            <FormItem
                                asterisk
                                label="Số điện thoại của em"
                                invalid={errors.phone && touched.phone}
                                errorMessage={errors.phone}
                            >
                                <Field
                                    type="text"
                                    name="phone"
                                    placeholder="0912345678"
                                    component={Input}
                                />
                            </FormItem>

                            <FormItem
                                asterisk
                                label="Em đang học trường nào?"
                                invalid={errors.school && touched.school}
                                errorMessage={errors.school}
                            >
                                <Field
                                    type="text"
                                    name="school"
                                    placeholder="Trường THPT Lê Quý Đôn - Đống Đa"
                                    component={Input}
                                />
                            </FormItem>

                            <FormItem
                                asterisk
                                label="Em đang học lớp mấy?"
                                invalid={errors.grade && touched.grade}
                                errorMessage={errors.grade}
                            >
                                <Field name="grade">
                                    {({ field, form }: FieldProps<FormValues>) => (
                                        <Select
                                            field={field}
                                            form={form}
                                            options={options}
                                            value={options.filter(
                                                (option) =>
                                                    option.value ===
                                                    values.grade
                                            )}
                                            onChange={(option) =>
                                                form.setFieldValue(
                                                    field.name,
                                                    option?.value
                                                )
                                            }
                                        />
                                    )}
                                </Field>
                            </FormItem>
                            <FormItem>
                                <Button type="submit">Lấy voucher</Button>
                            </FormItem>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default EVoucherForm

