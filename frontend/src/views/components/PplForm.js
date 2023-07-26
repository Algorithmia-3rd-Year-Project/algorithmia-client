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

                <div className="fields mb-3">
                    <label className="form-label fw-bold" htmlFor="type">Placement Type</label>
                    <label className="star fw-bold" style={{ color: "red" }}> *</label>
                    <select className="form-select" aria-label="Default select example" name="type" value={type}
                        onChange={(e) => setType(e.target.value)}>
                        <option selected></option>
                        <option value="1" id="type" required>One</option>
                        <option value="2" id="type" required>Two</option>
                        <option value="3" id="type" required>Three</option>
                    </select>
                </div>

                <div className="fields mb-3">
                    <label className="form-label fw-bold" htmlFor="product">Product</label>
                    <label className="star fw-bold" style={{ color: "red" }}> *</label>
                    <select className="form-select" aria-label="Default select example" name="product" value={product}
                        onChange={(e) => setProduct(e.target.value)}>
                        <option selected></option>
                        <option value="1" id="product" required>One</option>
                        <option value="2" id="product" required>Two</option>
                        <option value="3" id="product" required>Three</option>
                    </select>
                </div>

                <div className="fields mb-3">
                    <label className="form-label fw-bold" htmlFor="description">Description</label>
                    <label className="star fw-bold" style={{ color: "red" }}> *</label>
                    <textarea className="form-control" rows="4" name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>

                <div className="fields mb-3">
                    <label className="form-label fw-bold" htmlFor="duration">Select duration for the placement</label>
                    <div className="row pb-3">
                        <div className="form-group col-6">
                            <label className="form-label" htmlFor="sdate">Start Date</label>
                            <label className="star fw-bold" style={{ color: "red" }}> *</label>
                            <input type="date" className="form-control"  name="sdate"
            value={sdate}
            onChange={(e) => setSdate(e.target.value)} required />
                        </div>
                        <div className="form-group col-6">
                            <label className="form-label" htmlFor="edate">End Date</label>
                            <label className="star fw-bold" style={{ color: "red" }}> *</label>
                            <input type="date" className="form-control"  name="edate"
            value={edate}
            onChange={(e) => setEdate(e.target.value)} required />
                        </div>
                    </div>
                </div>

                <div className="fields mb-3">
                    <label className="form-label fw-bold" htmlFor="formfile">Attachments</label>
                    <input type="file" className="form-control" id="formfile" />
                </div>

                <button type="submit" className="btn btn-primary w-25 mb-4 border-0" style={{ backgroundColor: "#002B5B" }}>Submit</button>
                { error && <div className="error"> {error} </div> }
            </form>
        </div>

    );
};

export default PplForm;
