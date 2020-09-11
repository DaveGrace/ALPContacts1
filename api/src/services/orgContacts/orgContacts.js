import { db } from 'src/lib/db'

export const orgContacts = () => {
  return db.orgContact.findMany()
}

export const orgContact = ({ id }) => {
  return db.orgContact.findOne({
    where: { id },
  })
}

export const createOrgContact = ({ input }) => {
  return db.orgContact.create({
    data: input,
  })
}

export const updateOrgContact = ({ id, input }) => {
  return db.orgContact.update({
    data: input,
    where: { id },
  })
}

export const deleteOrgContact = ({ id }) => {
  return db.orgContact.delete({
    where: { id },
  })
}
