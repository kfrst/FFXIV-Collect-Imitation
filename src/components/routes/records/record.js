import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useTitle } from "../../../features/hooks/useTitle"
import { fetchRecord, clearStatus, selectRecord, selectRecordStatus } from "./recordData"
import { MainContainer } from "../../styled-components/containerElements"
import { NotFound } from "../notFound"
import { Loading } from "../../loading"
import { RecordCard } from "../../cards/recordCard"

export const Record = () => {
  const dispatch = useDispatch()
  const record = useSelector(selectRecord)
  const recordStatus = useSelector(selectRecordStatus)
  const recordID = parseInt(useParams().recordID, 10)

  useTitle(recordStatus === "succeeded" ? `${record.name} - FFXIV Collect` : 'FFXIV Collect')
  useEffect(() => {
    dispatch(fetchRecord(recordID))
    return () => dispatch(clearStatus())
  }, [dispatch, recordID])
  
  return (
    <>
      {recordStatus !== "rejected" ? (
        <MainContainer>
          {recordStatus === "succeeded" ? <RecordCard record={record} /> : <Loading />}
        </MainContainer>
      ) : (
        <NotFound />
      )}
    </>
  )
}