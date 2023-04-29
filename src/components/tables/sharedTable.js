import { StyledLink } from "../styled-components/commonElements"
import { useCallback, useState } from "react"
import { displayStars } from "../../features/display"
import StyledTable from "../styled-components/table"

const sortData = (tableData, sortKey, reverse) => {
  if (!sortKey) return tableData
  const sortedData = tableData.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1
  })
  if (reverse) {
    return sortedData.reverse()
  }
  return sortedData
}

export const SharedTable = (props) => {
  const { tableHeaders, tableData, checkCollectable } = props
  const [sortKey, setSortKey] = useState()
  const [sortOrder, setSortOrder] = useState("asc")
  const reverse = sortOrder === "desc"
  const sortedTableData = useCallback(
    () => sortData(tableData, sortKey, reverse),
    [tableData, sortKey, reverse]
  )

  const changeSort = (key) => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    setSortKey(key)
  }
  return (
    <StyledTable.Container>
      <StyledTable>
        <StyledTable.Thead>
          <StyledTable.Tr>
            {tableHeaders.map((header) => {
              return (
                <StyledTable.Th
                  sort={true}
                  key={header.name}
                  alignText={header.style}
                  onClick={() => changeSort(header.name)}
                >
                  {header.text}
                  {sortOrder && sortKey === header.name && (
                    <StyledTable.Arrow sortOrder={sortOrder}></StyledTable.Arrow>
                  )}
                </StyledTable.Th>
              )
            })}
          </StyledTable.Tr>
        </StyledTable.Thead>
        <tbody>
          {sortedTableData().map((data) => {
            return (
              <StyledTable.Tr owned={data.isOwned} key={data.id}>
                {tableHeaders.map((header) => {
                  if (header.name === "icon") {
                    return (
                      <StyledTable.Td key={`${data.id}-${header.name}`} alignText={header.style}>
                        <StyledTable.Ico icoSize={header.icoSize} alt={data.name} src={data[header.name]} />
                      </StyledTable.Td>
                    )
                  }
                  if (header.name === "name") {
                    return (
                      <StyledTable.Td key={`${data.id}-${header.name}`} alignText={header.style}>
                        <StyledLink to={`${data.path}`}>{data[header.name]}</StyledLink>
                      </StyledTable.Td>
                    )
                  }
                  if (header.name === "rank") {
                    return (
                      <StyledTable.Td key={`${data.id}-${header.name}`} alignText={header.style}>
                        {displayStars(data.rank, data.id, header.name)}
                      </StyledTable.Td>
                    )
                  }
                  if (header.name === "isOwned") {
                    return (
                      <StyledTable.Td key={`${data.id}-${header.name}`} alignText={header.style}>
                        <StyledTable.Checkbox
                          type="checkbox"
                          onChange={() => checkCollectable(data.id)}
                          checked={data[header.name] === "owned" ? true : false}
                        />
                      </StyledTable.Td>
                    )
                  }
                  return (
                    <StyledTable.Td key={`${data.id}-${header.name}`} alignText={header.style}>
                      {data[header.name]}
                    </StyledTable.Td>
                  )
                })}
              </StyledTable.Tr>
            )
          })}
        </tbody>
      </StyledTable>
    </StyledTable.Container>
  )
}