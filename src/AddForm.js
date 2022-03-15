export default function AddForm() {
  return (
    <div className="my-2 border border-info p-3">
      <form className="form-inline">
        <div className="form-group">
          <label className="mx-2" htmlFor="item-name">Name:</label>
          <input className="mx-2 form-control" type="text" name="name" id="item-name" />
        </div>
        <button className="btn btn-primary" type="submit">Add</button>
      </form>
    </div>
  );
}