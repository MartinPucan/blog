import React from 'react'

window.addEventListener('load', (event) => {
    const table = document.getElementById("tableId")
    const tableHeadTitles = table.querySelectorAll("#tableId thead th")
    const tableBodyRows = table.querySelectorAll("#tableId tbody tr")

    function isNumeric(str) {
        if (typeof str != "string") return false
        return !isNaN(str) && !isNaN(parseFloat(str))
    }

    function tableValuesToObject(tHeadTitles, tBodyRows) {
        const tableHeadTitleValues = []
        const tableValues = []
        tHeadTitles.forEach(item => tableHeadTitleValues.push(item))

        for (let i = 0; i < tBodyRows.length; i++) {
            let tableValue = {}
            for (let j = 0; j < tableHeadTitleValues.length; j++) {
                let columnValue = tBodyRows[i].children[j].textContent
                isNumeric(columnValue)
                  ? tableValue[tableHeadTitleValues[j].textContent.toLowerCase()] = Number(columnValue)
                  : tableValue[tableHeadTitleValues[j].textContent.toLowerCase()] = columnValue
            }
            tableValues.push(tableValue)
        }

        return tableValues
    }

    const sortASCBy = (arrayOfObjects, key) => arrayOfObjects.concat().sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
    const sortDESCBy = (arrayOfObjects, key) => arrayOfObjects.concat().sort((a, b) => (b[key] > a[key] ? 1 : b[key] < a[key] ? -1 : 0))

    function generateSortedTable(table, sortedValues) {
        const tableBody = table.getElementsByTagName("tbody")
        tableBody[0].innerHTML = ""
        for (let element of sortedValues) {
            let row = tableBody[0].insertRow();
            for (let key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }

    tableHeadTitles.forEach(headerColumn => {
        headerColumn.addEventListener("click", () => {
            let arrowIcon = headerColumn.children[0]

            if (!headerColumn.hasAttribute('data-sort')) { return }
            if (arrowIcon.classList.contains('arrow') && arrowIcon.classList.contains('down')) {
                arrowIcon.classList.replace('down', 'up')
                generateSortedTable(table, sortASCBy(tableValuesToObject(tableHeadTitles, tableBodyRows), headerColumn.textContent.toLowerCase()))
            } else {
                arrowIcon.classList.replace('up', 'down')
                generateSortedTable(table, sortDESCBy(tableValuesToObject(tableHeadTitles, tableBodyRows), headerColumn.textContent.toLowerCase()))
            }
        })
    })
})

function Table() {
  return (
    <section id="table">
        <table id="tableId">
            <thead>
                <tr>
                    <th data-sort="test">Id<i className="arrow down"></i></th>
                    <th data-sort="test">Name<i className="arrow down"></i></th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>4</td>
                    <td>Samuel</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Jonas</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Henry</td>
                    <td>29</td>
                </tr>
                <tr>
                    <td>1000</td>
                    <td>Ara</td>
                    <td>77</td>
                </tr>
                <tr>
                    <td>555</td>
                    <td>Sas</td>
                    <td>33</td>
                </tr>
                <tr>
                    <td>77</td>
                    <td>Lily</td>
                    <td>28</td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}

export default Table