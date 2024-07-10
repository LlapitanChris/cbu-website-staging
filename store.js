import { configureStore } from '@reduxjs/toolkit';
import categoryItemsReducer from './redux/category_items/reducer';
import configurationsReducer from './redux/configurations/reducer';
import eventsReducer from './redux/events/reducer';
import faqsReducer from './redux/faqs/reducer';
import invoicesReducer from './redux/invoices/reducer';
import menuReducer from './redux/menu/reducer';
import ordersReducer from './redux/orders/reducer';
import subConfigurationsReducer from './redux/subConfigurations/reducer';
import updateOrderItemReducer from './redux/update_order_item/reducer';

export const store = configureStore({
    reducer: {
        faqsReducer: faqsReducer,
        ordersReducer: ordersReducer,
        invoicesReducer: invoicesReducer,
        menuReducer: menuReducer,
        eventsReducer: eventsReducer,
        configurationsReducer: configurationsReducer,
        categoryItemsReducer: categoryItemsReducer,
        subConfigurationsReducer: subConfigurationsReducer,
        updateOrderItemReducer: updateOrderItemReducer,
    },
});