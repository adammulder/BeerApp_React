import Input from "./Input"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseBrand, chooseType, chooseABV, chooseIBU } from "../redux/Slices/RootSlices"



interface ContactFormProps {
    id?: string[]
    
}

const ContactForm = (props: ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
        server_calls.update(props.id[0], data)
        console.log(`Updated: ${data.name} ${props.id}`)
        setTimeout(() => {window.location.reload()}, 1000);
        event.target.reset()
    } else {
        // Use dispatch to update our state in our store
        dispatch(chooseBrand(data.brand));
        dispatch(chooseType(data.type));
        dispatch(chooseABV(data.abv));
        dispatch(chooseIBU(data.ibu));

        server_calls.create(store.getState())
        setTimeout(() => {window.location.reload()},1000)
    }
  }

  return (

    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="p-4" htmlFor="brand"></label>
                <Input {...register('brand')} name='brand' placeholder="Brand" label="Brand" />
            </div>
            <div>
                <label className="p-4" htmlFor="type"></label>
                <Input {...register('type')} name='type' placeholder="Type" label="Type"/>
            </div>
            <div>
                <label className="p-4" htmlFor="abv"></label>
                <Input {...register('abv')} name='abv' placeholder="ABV" label="ABV"/>
            </div>
            <div>
                <label className="p-4" htmlFor="ibu"></label>
                <Input {...register('ibu')} name='ibu' placeholder="IBU" label="IBU"/>
            </div>
            <div className="flex p-1">
                <button
                className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm