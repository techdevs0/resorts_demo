import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import API from '../../../utils/http';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CircularProgress from '@material-ui/core/CircularProgress';
import { formattedDate } from '../../../utils/snippets.js';

export default function WeddingFormDialog() {

    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setFirstName] = useState('');
    const [sr_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [nationality, setNationality] = useState('');
    const [contact_number, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [package_chosen, setPackage] = useState('');
    const [remark, setRemarks] = useState('');
    const [number_of_pax, setPaxAmount] = useState(1);
    const [pr_date_1, setPreferredDateOne] = useState(formattedDate(new Date(), 'yyyy-MM-dd'));
    const [pr_date_2, setPreferredDateTwo] = useState(formattedDate(new Date(), 'yyyy-MM-dd'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        if (name === "" || name === null) {
            alert('Please enter first name');
            return;
        }
        if (sr_name === "" || sr_name === null) {
            alert('Please enter last name');
            return;
        }
        if (email === "" || email === null) {
            alert('Please enter email address');
            return;
        }
        if (address === "" || address === null) {
            alert('Please enter address');
            return;
        }
        if (package_chosen === "" || package_chosen === null) {
            alert('Please enter package_chosen');
            return;
        }
        if (remark === "" || remark === null) {
            alert('Please enter remark');
            return;
        }
        if (number_of_pax === "" || number_of_pax === null) {
            alert('Please enter number of Pax');
            return;
        }
        if (nationality === "" || nationality === null) {
            alert('Please enter nationality');
            return;
        }
        if (contact_number === "" || contact_number === null) {
            alert('Please enter contact number');
            return;
        }
        setIsLoading(true);
        API.post('/book_wedding', JSON.stringify({ name, sr_name, address, package_chosen, remark, number_of_pax, nationality, contact_number, email, pr_date_1: formattedDate(pr_date_1, 'yyyy-MM-dd'), pr_date_2: formattedDate(pr_date_2, 'yyyy-MM-dd') }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status === 200) {
                setIsLoading(false);
                setFirstName('');
                setLastName('');
                setEmail('');
                setAddress('');
                setNationality('');
                setRemarks('');
                setContactNumber('');
                setPackage('');
                setPreferredDateOne(formattedDate(new Date(), 'yyyy-MM-dd'));
                setPreferredDateTwo(formattedDate(new Date(), 'yyyy-MM-dd'));
                setPaxAmount('');
                alert('Message Submitted. We will get in touch shortly.');
                setOpen(false);
            }
        }).catch(error => {
            console.log(error);
            setIsLoading(false);
        });
    }

    return (
        <div className="wedding-form-wrapper mt-3 mt-sm-5">
            <button onClick={handleClickOpen} className="btn main-btn btn-eden">
                Book Now
            </button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Book Your Wedding Destination
                </DialogTitle>
                <DialogContent>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                        <div className="wedding-form">
                            <div className="container-fluid">

                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6 my-2">
                                            <input type="text" value={name} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <input type="text" value={sr_name} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} placeholder="Nationality" />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <input type="text" value={contact_number} onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact Number" />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Current Address" />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <select value={package_chosen} onChange={(e) => setPackage(e.target.value)}>
                                                <option value="">Choose a Package</option>
                                                <option value="pontoon">Seaside Pontoon Wedding</option>
                                                <option value="special">Fishermans Cove Resort Special</option>
                                                <option value="barefoot">Barefoot Wedding</option>
                                                <option value="vows">Renewal of your wedding vows</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <input type="number" value={number_of_pax} onChange={(e) => setPaxAmount(e.target.value)} placeholder="Number of Pax" />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="yyyy-MM-dd"
                                                margin="none"
                                                id="date-picker-inline"
                                                value={pr_date_1}
                                                onChange={(date => setPreferredDateOne(date))}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="yyyy-MM-dd"
                                                margin="none"
                                                id="date-picker-inline"
                                                value={pr_date_2}
                                                onChange={(date => setPreferredDateTwo(date))}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <textarea type="text" value={remark} onChange={(e) => setRemarks(e.target.value)} placeholder="Write a Remark..." rows={3} >

                                            </textarea>
                                        </div>
                                        <div className="col-12 text-center py-2 my-2">
                                            {
                                                isLoading ? <CircularProgress /> :
                                                    <button type="button" onClick={handleSubmit} className="main-btn btn-filled btn-eden">Submit</button>
                                            }
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </MuiPickersUtilsProvider>
                </DialogContent>
            </Dialog>
        </div>
    );
}
