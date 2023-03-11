import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import image from "../../assets/main-img.gif";
import {toast} from "react-toastify";

const Home = () => {
    const totalAmount = 300000;
    const [spent, setSpent] = useState('');
    const [remaining, setRemaining] = useState('');
    const data: any = JSON.parse(localStorage.getItem('myData') || '[]');
    useEffect(() =>{
        setAmounts();
    }, [])

    const initialValues = {
        expenseName: '',
        expenseDesc: '',
        expenseType: '',
        amount: '',
        number: '',
        date: new Date().toISOString().slice(0, 10),
        sendTo: '',
    };
    const expenseTypesArr = [
        'Plumber',
        'Plumbing Material',
        'Building Material',
        'Tile',
        'Mistri',
        'Mazdur',
        'Others'
    ];

    const validationSchema = Yup.object({
        expenseName: Yup.string().required('Expense name is required'),
        expenseDesc: Yup.string().required('Expense Desc is required'),
        sendTo: Yup.string().required('Recipient name is required'),
        amount: Yup.string().required('Amount is required'),
        number: Yup.string(),
        date: Yup.string(),
        expenseType: Yup.string().required('Expense Type is required')
    });

    const onSubmit = (values : any, {resetForm}: any) => {
        if(checkExpensePresent(data, values)){
            toast.error('The expense is already present', {
                position: toast.POSITION.BOTTOM_CENTER,
            })
        }
        else{
            data.push(values);
            localStorage.setItem('myData', JSON.stringify(data));
            setSpent(getTotalSpends());
            setRemaining((totalAmount - Number(getTotalSpends())).toString())
            toast.success('Expense added successfully!', {
                position: toast.POSITION.BOTTOM_CENTER,
            });
            resetForm();
        }
    };

    const checkExpensePresent = (arr: any, data: any) =>{
        return arr.some((element: any) =>
            Object.entries(element).every(([key, value]) => data[key as keyof any] === value)
        )
    }

    const setAmounts = () =>{
        setSpent(getTotalSpends());
        setRemaining((totalAmount - Number(getTotalSpends())).toString())
    }

    const getTotalSpends = () =>{
        if(data.length !== 0){
            return data.map((element: any) => element.amount).reduce((a, b) => Number(a) + Number(b)).toString();
        }
        else{
            return ''
        }
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6">
                    <img src={image} className="max-w-5xl mx-auto" alt=""/>
                </div>
                <div className="col-span-12 md:col-span-6 my-auto">
                    <div className="bg-gray-50 shadow-lg rounded-md p-5">
                        <h1 className="text-center text-4xl font-bold font-mono tracking-widest uppercase my-4 underline">Expenses</h1>
                        <div className="flex items-center font-mono tracking-wider uppercase">
                            <span className="text-4xl">Amount - </span>
                            <span className="text-2xl ml-4 text-green-700">Rs. {totalAmount}</span>
                        </div>
                        <div className="flex items-center my-4 font-mono tracking-wider uppercase">
                            <span className="text-4xl">Spent - </span>
                            <span className="text-2xl ml-4 text-blue-700">Rs. {spent}</span>
                        </div>
                        <div className="flex items-center font-mono tracking-wider uppercase">
                            <span className="text-4xl">Remaining - </span>
                            <span className="text-2xl ml-4 text-red-700">Rs. {remaining}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched }) => (
                    <Form className="p-4 grid grid-cols-12 gap-3">
                        <div className="mb-4 col-span-6">
                            <Field
                                type="text"
                                name="expenseName"
                                placeholder="Expense Name"
                                className={`p-2 w-full rounded border ${
                                    touched.expenseName && errors.expenseName ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            <ErrorMessage name="expenseName" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4 col-span-6">
                            <Field
                                as="select"
                                name="expenseType"
                                id="expenseType"
                                className={`p-2 w-full rounded border bg-transparent ${
                                    touched.expenseType && errors.expenseType ? 'border-red-500' : 'border-gray-300'
                                }`}
                            >
                                <option value="" className="text-gray-700">Expense Type</option>
                                {expenseTypesArr.map((data: any) =>{
                                    return <option key={data} value={data} className="text-gray-700">{data}</option>
                                })}
                            </Field>
                            <ErrorMessage name="expenseType" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4 col-span-6">
                            <Field
                                type="text"
                                name="amount"
                                placeholder="Amount"
                                className={`p-2 w-full rounded border ${
                                    touched.amount && errors.amount ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            <ErrorMessage name="amount" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4 col-span-6 cursor-pointer">
                            <Field id="date" name="date" type="date" className={`p-2 w-full rounded border ${
                                touched.date && errors.date ? 'border-red-500' : 'border-gray-300'
                            }`} />
                            <ErrorMessage name="date" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4 col-span-6">
                            <Field
                                type="text"
                                name="sendTo"
                                placeholder="Recipient Name"
                                className={`p-2 w-full rounded border ${
                                    touched.expenseName && errors.expenseName ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            <ErrorMessage name="sendTo" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4 col-span-6">
                            <Field
                                type="text"
                                name="number"
                                placeholder="Phone Number"
                                className={`p-2 w-full rounded border ${
                                    touched.number && errors.number ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            <ErrorMessage name="number" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4 col-span-12">
                            <Field
                                as="textarea"
                                rows={4}
                                name="expenseDesc"
                                placeholder="Expense Description"
                                className={`p-2 w-full rounded border ${
                                    touched.expenseDesc && errors.expenseDesc ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            <ErrorMessage name="expenseDesc" component="div" className="text-red-500 text-sm mt-1" />
                        </div>


                        <button type="submit" className="bg-teal-500 col-span-12 hover:bg-teal-600 uppercase tracking-widest text-lg
                         text-white py-2 px-4 rounded mt-2 w-full">
                            Add
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Home;