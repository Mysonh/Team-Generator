// function to create team
// createTeam
// inside parent func, func for each type of employee

// each indidivudal func will take an employee param and return html
createTeam = (team) => {

const engineer = (engineer) => {
    return `
    <div>
    <h1>
    ${engineer.getName()}
    </h1>
    <h2>
    ${engineer.getRole()}
    </h2>
    <li>
        <ul>
        ${engineer.getid()}
        ${engineer.getEmail()}
        ${engineer.getGithub()}
        <ul>
    </li>
    <div>
    `
    },

    const manager = (manager) => {
        return `
        <div>
        <h1>
        ${manager.getName()}
        </h1>
        <h2>
        ${manager.getRole()}
        </h2>
        <li>
            <ul>
            ${manager.getid()}
            ${manager.getEmail()}
            ${manager.getofficeNumber()}
            <ul>
        </li>
        <div>
        `
        },

        const intern = (intern) => {
            return `
            <div>
            <h1>
            ${intern.getName()}
            </h1>
            <h2>
            ${intern.getRole()}
            </h2>
            <li>
                <ul>
                ${intern.getId()}
                ${intern.getemail()}
                ${intern.getschool()}
                <ul>
            </li>
            <div>
            `
            },
}
// export func to generate entire page
module.exports = ${createTeam(team)}