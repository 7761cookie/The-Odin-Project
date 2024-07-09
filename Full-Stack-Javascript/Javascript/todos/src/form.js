const form = `
    <form>
        <label for="form-name">Item Name:</label>
        <input type="text" id="form-name" placeholder="Item Name" required>
        
        <label for="form-description">Description:</label>
        <input name="description" placeholder="Description" type="text">
        
        <label for="form-due">Due Date:</label>
        <input name="due-date" placeholder="Due Date" type="text">
        
        <label for="form-priority">Priority:</label>
        <input name="priority" placeholder="Priority" type="text">
        
        <button type="button" id="submit">Submit</button>
    </form>
`;

export default form;
