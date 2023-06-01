import { prisma } from "../../../libs/prisma.libs";

export default async function getOrderById(req, res) {
  const orderId = parseInt(req.query.id);

  try {
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
      include: {
        product: true,
      },
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({data:order});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
