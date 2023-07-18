
const PplForm = () => {
    return (
        <div className="container border mt-5 w-50 p-5 rounded-4" style={{ backgroundColor: "#ACDBDF" }}>
            <h2 className="text-center mb-5" style={{ color: "#002B5B" }}>Product Placement Request Form</h2>
            <h5 className="mb-5">Fill the below form and advertise your product, brand in Algorithmia</h5>

            <div class="fields mb-3">
                <label class="form-label fw-bold" for="type">Placement Type</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option value="1" id="type">One</option>
                    <option value="2" id="type">Two</option>
                    <option value="3" id="type">Three</option>
                </select>
            </div>

            <div class="fields mb-3">
                <label class="form-label fw-bold" for="product">Product</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option value="1" id="product">One</option>
                    <option value="2" id="product">Two</option>
                    <option value="3" id="product">Three</option>
                </select>
            </div>

            <div class="fields mb-3">
                <label class="form-label fw-bold" for="description">Description</label>
                <textarea class="form-control" id="description" rows="4"></textarea>
            </div>

            <div class="fields mb-3">
            <label class="form-label fw-bold" for="duration">Select duration for the placement</label>
            <div class="form-row pb-3">
                <div class="form-group col-6">
                    <label class="form-label" for="sdate">Start Date</label>
                    <input type="date" class="form-control" id="sdate" />
                </div>
                <div class="form-group col-6">
                    <label class="form-label" for="edate">End Date</label>
                    <input type="date" class="form-control" id="edate"/>
                </div>
            </div>
            </div>

            <div class="fields mb-3">
                <label class="form-label fw-bold" for="formfile">Attachments</label>
                <input type="file" class="form-control" id="formfile"/>
            </div>

            <button type="submit" class="btn btn-primary w-25 mb-4 border-0" style={{ backgroundColor: "#002B5B" }}>Submit</button>

        </div>

    );
};

export default PplForm;
