interface CourcerGoal {
    title: string
    description: string
    completeUntil: Date
}

function createCourceGoal(title: string, description: string, date: Date): CourcerGoal {
    // return { title: title, description: description, completeUntil: date }
    let object: Partial<CourcerGoal> = {}
    object.title = title
    object.description = description
    object.completeUntil = date
    return object as CourcerGoal
}

const names: Readonly<string[]> = ["max", "manu"]
// names.push('anna')
