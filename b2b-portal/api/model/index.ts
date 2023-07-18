import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

export const supplierRole = acl.createRole('supplier', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const clientRole = acl.createRole('client', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const personIdSupplierVariable = acl.createPredefinedVariable('personId', 'personID', supplierRole)

export const personIdClientVariable = acl.createPredefinedVariable('personId', 'personID', clientRole)

export const UserRole = def.createEnum('supplier')

@def.Unique('personId', 'email')

@acl.allow(supplierRole, {
	when: { personId: personIdSupplierVariable },
	read: true,
	update: true,
})
@acl.allow(clientRole, {
	when: { personId: personIdClientVariable },
	read: true,
	update: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	phone = def.stringColumn()
	address = def.stringColumn()
	company = def.stringColumn()
	role = def.enumColumn(UserRole)
	products = def.oneHasMany(Product, 'supplier')
	orders = def.oneHasMany(Order, 'client')
	invoices = def.oneHasMany(Invoice, 'client')
}


@acl.allow(supplierRole, {
	when: { supplier: { personId: personIdSupplierVariable } },
	read: true,
	update: true,
})
@acl.allow(clientRole, {
	read: true,
})
export class Product {
	name = def.stringColumn()
	description = def.stringColumn()
	price = def.doubleColumn()
	availableQuantity = def.intColumn()
	supplier = def.manyHasOne(User, 'products')
	image = def.manyHasOne(Image, 'productImage').setNullOnDelete()
	orderedProducts = def.oneHasMany(OrderedProduct, 'product')
}


@acl.allow(supplierRole, {
	read: true,
})
@acl.allow(clientRole, {
	read: true,
})
export class Image {
	url = def.stringColumn().notNull()
	width = def.intColumn()
	height = def.intColumn()
	size = def.intColumn()
	type = def.stringColumn()
	alt = def.stringColumn()
	createdAt = def.dateTimeColumn().notNull().default('now')
	productImage = def.oneHasMany(Product, 'image')
}


@acl.allow(supplierRole, {
	when: { orderedProducts: { product: { supplier: { personId: personIdSupplierVariable } } } },
	read: true,
	update: true,
})
@acl.allow(clientRole, {
	when: { client: { personId: personIdClientVariable } },
	read: true,
	create: true,
	update: true,
})
export class Order {
	client = def.manyHasOne(User, 'orders')
	orderedProducts = def.oneHasMany(OrderedProduct, 'order')
	orderDate = def.dateTimeColumn()
	shippingDate = def.dateTimeColumn()
	status = def.stringColumn()
	invoice = def.oneHasOne(Invoice, 'order')
}


@acl.allow(supplierRole, {
	when: { order: { orderedProducts: { product: { supplier: { personId: personIdSupplierVariable } } } } },
	read: true,
})
@acl.allow(clientRole, {
	when: { client: { personId: personIdClientVariable } },
	read: true,
	create: true,
	update: true,
})
export class Invoice {
	client = def.manyHasOne(User, 'invoices')
	order = def.oneHasOneInverse(Order, 'invoice')
	invoiceDate = def.dateTimeColumn()
	dueDate = def.dateTimeColumn()
	totalAmount = def.doubleColumn()
	paymentStatus = def.stringColumn()
}


@acl.allow(supplierRole, {
	when: { product: { supplier: { personId: personIdSupplierVariable } } },
	read: true,
	update: true,
})
@acl.allow(clientRole, {
	when: { order: { client: { personId: personIdClientVariable } } },
	read: true,
	create: true,
	update: true,
})
export class OrderedProduct {
	product = def.manyHasOne(Product, 'orderedProducts')
	order = def.manyHasOne(Order, 'orderedProducts')
	quantity = def.intColumn()
}
