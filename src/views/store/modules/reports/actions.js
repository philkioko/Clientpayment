import baseurl from "../../../Auth/baseurl";
import jsPDF from 'jspdf'
import 'jspdf-autotable';

//getting reports for daily weekly and monthly and print them out in pdf format using jsPDF library
export const actions = {
    QueryPurchaseReport({dispatch},report) {
        if (report.duration === 'daily') {
         baseurl.post('api/QueryDailyReport', report).then(response => {
            var pdf = new jsPDF('p', 'pt', 'a4')
            var img = new Image()
            let Title = 'Daily Purchases Reports'
            let address = 'P. O BOX: ' + 'P.O Box 634' + ' CODE: ' + '80200'
            let phone = 'Contacts: ' + '072348234211' + ' Email: ' + 'info@owner.com'
            var columns = [
                { title: 'Fullnames', dataKey: 'customer_name' },
                { title: 'Item Name', dataKey: 'itemname' },
                { title: 'Item Price', dataKey: 'items_price' },
                { title: 'Date Purchased', dataKey: 'date_created' },
            ]
            var rows = response.data
            pdf.autoTable(columns, rows, {
                margin: { top: 150 },
                showFoot: 'everyPage',
                didDrawPage: function (data) {
                    pdf.setFontSize(18)
                    pdf.setFont('courier')
                    pdf.setFontType('bolditalic')
                    pdf.text(Title, 200, 50)
                    img.addEventListener('load', function () {
                        pdf.addImage(img, 50, 50)
                        pdf.save('purchaseReports.pdf')
                    })
                    pdf.setFontSize(11)
                    pdf.setFont('courier')
                    pdf.setFontType('bolditalic')
                    pdf.text(200, 90, address)
                    pdf.text(130, 110, phone)
                    pdf.setFontSize(12)
                    pdf.setFont('times')
                    pdf.setFontType('normal')
                }
            })
            img.src = 'http://localhost:8080/img/logo-01.png'
         })
        }else if (report.duration === 'weekly') {
            baseurl.post('api/QueryWeeklyReport', report).then(response => {
                var pdf = new jsPDF('p', 'pt', 'a4')
                var img = new Image()
                let Title = 'Weekly Purchases Reports'
                let address = 'P. O BOX: ' + 'P.O Box 634' + ' CODE: ' + '80200'
                let phone = 'Contacts: ' + '072348234211' + ' Email: ' + 'info@owner.com'
                var columns = [
                    { title: 'Fullnames', dataKey: 'customer_name' },
                    { title: 'Item Name', dataKey: 'itemname' },
                    { title: 'Item Price', dataKey: 'items_price' },
                    { title: 'Date Purchased', dataKey: 'date_created' },
                ]
                var rows = response.data
                pdf.autoTable(columns, rows, {
                    margin: { top: 150 },
                    showFoot: 'everyPage',
                    didDrawPage: function (data) {
                        pdf.setFontSize(18)
                        pdf.setFont('courier')
                        pdf.setFontType('bolditalic')
                        pdf.text(Title, 200, 50)
                        img.addEventListener('load', function () {
                            pdf.addImage(img, 50, 50)
                            pdf.save('purchaseReports.pdf')
                        })
                        pdf.setFontSize(11)
                        pdf.setFont('courier')
                        pdf.setFontType('bolditalic')
                        pdf.text(200, 90, address)
                        pdf.text(130, 110, phone)
                        pdf.setFontSize(12)
                        pdf.setFont('times')
                        pdf.setFontType('normal')
                    }
                })
                img.src = 'http://localhost:8080/img/logo-01.png'
             })
            
        }else if (report.duration === 'monthly') {
            baseurl.post('api/QueryMonthlyReport', report).then(response => {
                var pdf = new jsPDF('p', 'pt', 'a4')
                var img = new Image()
                let Title = 'Monthly Purchases Reports'
                let address = 'P. O BOX: ' + 'P.O Box 634' + ' CODE: ' + '80200'
                let phone = 'Contacts: ' + '072348234211' + ' Email: ' + 'info@owner.com'
                var columns = [
                    { title: 'Fullnames', dataKey: 'customer_name' },
                    { title: 'Item Name', dataKey: 'itemname' },
                    { title: 'Item Price', dataKey: 'items_price' },
                    { title: 'Date Purchased', dataKey: 'date_created' },
                ]
                var rows = response.data
                pdf.autoTable(columns, rows, {
                    margin: { top: 150 },
                    showFoot: 'everyPage',
                    didDrawPage: function (data) {
                        pdf.setFontSize(18)
                        pdf.setFont('courier')
                        pdf.setFontType('bolditalic')
                        pdf.text(Title, 200, 50)
                        img.addEventListener('load', function () {
                            pdf.addImage(img, 50, 50)
                            pdf.save('purchaseReports.pdf')
                        })
                        pdf.setFontSize(11)
                        pdf.setFont('courier')
                        pdf.setFontType('bolditalic')
                        pdf.text(200, 90, address)
                        pdf.text(130, 110, phone)
                        pdf.setFontSize(12)
                        pdf.setFont('times')
                        pdf.setFontType('normal')
                    }
                })
                img.src = 'http://localhost:8080/img/logo-01.png'
             }) 
        }
        
    }
}
export default actions