import { aboutMovie } from "@/types"

type DetailSectionProps={
    getdata:aboutMovie[]
}
export function DetailSection({getdata}:DetailSectionProps){
    const data = getdata
    console.log("DTA",data)
    return <div></div>
}