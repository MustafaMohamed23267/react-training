
function Footer()
{
     let Year = new Date().getFullYear();
     let month = new Date().getMonth();
     let date = new Date().getDate();
     switch (month) {
        case 0:
            month = "JAN";
            break;
        case 1:
            month = "FEB";
            break;  
        case 2:
            month = "MAR";
            break;

        case 3:
            month = "ABRIL";
            break;

        case 4:
            month = "MAY";
            break;

        case 5:
            month = "JUNE";
            break;

        case 6:
            month = "JULY";
            break;

        case 7:
            month = "AUG";
            break;

        case 8:
            month = "SEP";
            break;

        case 9:
            month = "OCT";
            break;

        case 10:
            month = "NOV";
            break;

        case 11:
            month = "DEC";
            break;
     
        default:
            break;
     }

    return(
        <>    
            <p>&copy; {Year}/{month}/{date} website Name</p>
        </>
    );
}

export default Footer