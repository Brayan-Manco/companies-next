"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormCreateCustomerProps } from "./FormCreateCustomer.types"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UploadButton } from "@/utils/uploadthing"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2).max(50),
  country: z.string().min(2),
  website: z.string().min(2), 
  phone : z.string().min(6), 
  cif : z.string().min(6), 
  profileImage : z.string().min(6), 
})


export const FormCreateCustomer = ( props: FormCreateCustomerProps) => {

  const { toast } = useToast();

  const { setOpenModalCreate } = props;
  //TODO quitar el eslin canson
  const  {} = setOpenModalCreate
  



  const [ photoUploaded, setPhotoUploaded ] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      website: "",
      phone: "",
      cif: "",
      profileImage: "",
    },
  })

  const { isValid } = form.formState;
 
  const  onSubmit = async(values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-3">

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company name</FormLabel>
                  <FormControl>
                    <Input placeholder="Company name..." type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                  <FormItem>
                      <FormLabel>Country</FormLabel>
                      <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                      >
                          <FormControl>
                              <SelectTrigger>
                                  <SelectValue placeholder="Select the country" />
                              </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                              <SelectItem value="spain">España</SelectItem>
                              <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                              <SelectItem value="portugal">Portugal</SelectItem>
                              <SelectItem value="grecia">Grecia</SelectItem>
                              <SelectItem value="italia">Italia</SelectItem>
                          </SelectContent>
                      </Select>
                      <FormMessage />
                  </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Web site</FormLabel>
                  <FormControl>
                    <Input placeholder="www.example.com" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+57 301 222 33 33" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cif"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CIF</FormLabel>
                  <FormControl>
                    <Input placeholder="b-123456" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profileImage"
              render={({ field }) => (
                  <FormItem>
                      <FormLabel>Profile Image</FormLabel>
                      <FormControl>
                          {photoUploaded ? (
                              <p className="text-sm">Image uploaded!</p>
                          ) : (
                              <UploadButton
                                  className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-3"
                                  {...field}
                                  endpoint="profileImage"
                                  onClientUploadComplete={(res) => {
                                      form.setValue("profileImage", res?.[0].url)
                                      toast({
                                          title: "Photo uploaded!"
                                      })
                                      setPhotoUploaded(true)
                                  }}
                                  onUploadError={(error: Error) => {
                                    console.log('error', error);
                                      toast({
                                          title: "Error uploading photo"
                                      })
                                  }}
                              />
                          )}
                      </FormControl>
                      <FormMessage />
                  </FormItem>
              )}
            />
          </div>

          <Button type="submit" disabled={!isValid}>Submit</Button>
        </form>
      </Form>
    </div>
  )
}
