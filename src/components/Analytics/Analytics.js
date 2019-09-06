import React, { useState, useEffect } from 'react'
import './Analytics.css'
function Analytics() {
  return (
    <div className="actions">
      <div class="form-style-5">
        <form>
          <fieldset>
            <legend><span class="number"></span>Update Client</legend>
            <label for="job"> Client:</label>
            <input type="text" name="name" placeholder="Name" />
            <label for="job">Transfer ownership to:</label>
            <select id="job" name="field4">
              <optgroup label="Indoors">
                <option value="debate">Debate</option>
                <option value="gaming">Gaming</option>
                <option value="snooker">Snooker</option>
              </optgroup>
            </select>
            <label for="job">Send Email:</label>
            <select id="job" name="field4">
              <optgroup label="Indoors">
                <option value="fishkeeping">Fishkeeping</option>
                <option value="reading">Reading</option>
              </optgroup>
            </select>
          </fieldset>
          <input type="submit" value="Apply" />
        </form>
      </div>

      <div class="form-style-5">
        <form>
          <fieldset>
            <legend><span class="number"></span>Add Client</legend>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="country" placeholder="Country" />
            <input type="text" name="owner" placeholder="Owner" />
          </fieldset>
          <input type="submit" value="Apply" />
        </form>
      </div>
    </div>

  );
}

export default Analytics;
