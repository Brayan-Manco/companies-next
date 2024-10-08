'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CirclePlus } from 'lucide-react'
import { useState } from "react"
import { FormCreateCustomer } from "../FormCreateCustomer"

export const HeaderCompanies = () => {
    const [ openModalCreate, setOpenModalCreate] = useState(false)
    return (
    <div className="flex justify-between items-center">
        <h2 className="text-xl">List of companies</h2>
        <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate} >
            <DialogTrigger asChild>
                <Button>Create Companies</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogHeader>Create Customers</DialogHeader>
                    <DialogDescription> Create and configure your custumer </DialogDescription>
                </DialogHeader>
                <FormCreateCustomer/>
            </DialogContent>
        </Dialog>
    </div>
  )
}
