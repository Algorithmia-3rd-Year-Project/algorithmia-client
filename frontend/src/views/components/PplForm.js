import { useState } from "react";

const PplForm = () => {
    const [type, setType] = useState("");
    const [product, setProduct] = useState("");
    const [description, setDescription] = useState("");
    const [sdate, setSdate] = useState("");
    const [edate, setEdate] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const ppl = { type, product, description, sdate, edate };

        const response = await fetch("/algorithmia/pplform/addppl", {
            method: "POST",
            body: JSON.stringify(ppl),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }

        if (response.ok) {
            setType("");
            setProduct("");
            setDescription("");
            setSdate("");
            setEdate("");
            setError(null);
            console.log("Placement request sent!", json);
        }
    };

    return (
        <div className="container border w-50 mt-5 p-5 rounded-4" style={{ backgroundColor: "#ACDBDF" }}>
            <form onSubmit={handleSubmit}>
                <h2 className="text-center mb-5" style={{ color: "#002B5B" }}>Product Placement Request Form</h2>
                <h5 className="mb-5">Fill the below form and advertise your product, brand in Algorithmia</h5>

                <div class="fields mb-3">
                    <label class="form-label fw-bold" for="type">Placement Type</label>
                    <label class="star fw-bold" style={{ color: "red" }}> *</label>
                    <select class="form-select" aria-label="Default select example" name="type" value={type}
                        onChange={(e) => setType(e.target.value)}>
                        <option selected></option>
                        <option value="1" id="type" required>One</option>
                        <option value="2" id="type" required>Two</option>
                        <option value="3" id="type" required>Three</option>
                    </select>
                </div>

                <div class="fields mb-3">
                    <label class="form-label fw-bold" for="product">Product</label>
                    <label class="star fw-bold" style={{ color: "red" }}> *</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1" id="product" required>One</option>
                        <option value="2" id="product" required>Two</option>
                        <option value="3" id="product" required>Three</option>
                    </select>
                </div>

                <div class="fields mb-3">
                    <label class="form-label fw-bold" for="description">Description</label>
                    <label class="star fw-bold" style={{ color: "red" }}> *</label>
                    <textarea class="form-control" rows="4" name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>

                <div class="fields mb-3">
                    <label class="form-label fw-bold" for="duration">Select duration for the placement</label>
                    <div class="row pb-3">
                        <div class="form-group col-6">
                            <label class="form-label" for="sdate">Start Date</label>
                            <label class="star fw-bold" style={{ color: "red" }}> *</label>
                            <input type="date" class="form-control"  name="sdate"
            value={sdate}
            onChange={(e) => setSdate(e.target.value)} required />
                        </div>
                        <div class="form-group col-6">
                            <label class="form-label" for="edate">End Date</label>
                            <label class="star fw-bold" style={{ color: "red" }}> *</label>
                            <input type="date" class="form-control"  name="edate"
            value={edate}
            onChange={(e) => setEdate(e.target.value)} required />
                        </div>
                    </div>
                </div>

                <div class="fields mb-3">
                    <label class="form-label fw-bold" for="formfile">Attachments</label>
                    <input type="file" class="form-control" id="formfile" />
                </div>

                <button type="submit" class="btn btn-primary w-25 mb-4 border-0" style={{ backgroundColor: "#002B5B" }}>Submit</button>
                { error && <div className="error"> {error} </div> }
            </form>
        </div>

    );
};

export default PplForm;
