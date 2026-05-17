import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import styles from './AddBeneficiary.module.css'
import backArrow from '/src/assets/addBeneficiary/back-arrow.svg'

const AddBeneficiary = () => {
  const [formData, setFormData] = useState({
    accountName: '',
    accountNumber: '',
    bank: '',
    bankLocation: '',
  });
  return (
    <div className={styles.addBeneficiaryContainer}>
      <nav className={styles.addBeneficiaryNav}>
        <a href=''><img src={backArrow} alt="" /></a>
      </nav>
      <div className={styles.aBContainer}>
        <header>
          <h1>Add a beneficiary</h1>
        </header>
        <div className={styles.aBFormBody}>
          <h2>Bank Account Details</h2>
          <form className={styles.aBForm} action="">
            <div className={styles.aBFields}>
              <div className={styles.aBFormGroup}>
                <div className={styles.aBFormSubGroup}>
                  <label htmlFor="accountName">Account name</label>
                  <input type="text" id='accountName' value={formData.accountName} onChange={(e) => setFormData({...formData, accountName: e.target.value})} />
                </div>
                <div className={styles.aBFormSubGroup}>
                  <label htmlFor="accountNumber">Account number</label>
                  <input type="text" id='accountNumber' value={formData.accountNumber} onChange={(e) => setFormData({...formData, accountNumber: e.target.value})} />
                </div>
              </div>
              <div className={styles.aBFormGroup}>
                <div className={styles.aBFormSubGroup}>
                  <label htmlFor="bank">Bank</label>
                  <select name="bank" id="bank" value={formData.bank} onChange={(e) => setFormData({...formData, bank: e.target.value})}>
                    <option value="">-select-</option>
                    <option value="Bank A">Bank A</option>
                    <option value="Bank B">Bank B</option>
                    <option value="Bank C">Bank C</option>
                  </select>
                </div>
                <div className={styles.aBFormSubGroup}>
                  <label htmlFor="bankLocation">Bank location</label>
                  <input type="text" id='bankLocation' value={formData.bankLocation} onChange={(e) => setFormData({...formData, bankLocation: e.target.value})} />
                </div>
              </div>
            </div>
            <p>Please enter the correct beneficiary account information to prevent potential delays in the transaction process</p>
            <div className={styles.aBButtonDiv}>
              <button type="submit">Add Beneficiary</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBeneficiary
