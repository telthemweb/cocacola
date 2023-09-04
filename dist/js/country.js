function loadCountrie() {
    const countries = tById("countries");

    html=`
    <label>Country</label>
    <select class="form-control" aria-label="Default select example" >
    <option selected>All</option>
    <option value="Ghana">Ghana</option>
    <option value="South Africa">South Africa</option>
    <option value="Angola">Angola</option>
    <option value="Benin">Benin</option>
    <option value="Botswana">Botswana</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Cape Verde">Cape Verde</option>
    <option value="Central African Republic">Central African Republic</option>
    <option value="Chad">Chad</option>
    <option value="Comoros">Comoros</option>
    <option value="Congo">Congo</option>
    <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Egypt">Egypt</option>
    <option value="Equatorial Guinea">Equatorial Guinea</option>
    <option value="Eritrea">Eritrea</option>
    <option value="Eswatini">Eswatini</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Guinea">Guinea</option>
    <option value="Guinea-Bissau">Guinea-Bissau</option>
    <option value="Kenya">Kenya</option>
    <option value="Lesotho">Lesotho</option>
    <option value="Liberia">Liberia</option>
    <option value="Libya">Libya</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malawi">Malawi</option>
    <option value="Mali">Mali</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mauritius">Mauritius</option>
    <option value="Morocco">Morocco</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Namibia">Namibia</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Rwanda">Rwanda</option>
    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
    <option value="Senegal">Senegal</option>
    <option value="Seychelles">Seychelles</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Somalia">Somalia</option>
    <option value="South Sudan">South Sudan</option>
    <option value="Sudan">Sudan</option>
    <option value="Swaziland">Swaziland</option>
    <option value="Tanzania">Tanzania</option>
    <option value="Togo">Togo</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Uganda">Uganda</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
    </select>
    `;

   
    var section = document.createElement("div");
    section.innerHTML =html;
    countries.appendChild(section);
}
loadCountrie() 
