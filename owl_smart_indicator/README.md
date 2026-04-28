# OWL Smart Status Indicator 🚀

![Odoo Version](https://img.shields.io/badge/Odoo-19.0-714B67?logo=odoo)
![License](https://img.shields.io/badge/License-LGPL--3-blue.svg)
![Framework](https://img.shields.io/badge/Framework-OWL-00A09D?logo=javascript)

**Advanced OWL widget for Odoo 19** that transforms boring numeric fields into intuitive, reactive visual status icons. 

---

## 🌟 Overview

In modern ERP systems, data clarity is key. This module replaces static numbers with dynamic indicators that provide instant visual feedback. Whether it's a **Quality Rate**, **Stock Level**, or **Project Progress**, users can now understand status at a glance.

### 🎨 Logic Design
The widget automatically calculates the status based on predefined thresholds:
- ✅ **Optimal (>= 80%):** Displays a green check circle.
- ⚠️ **Attention (40% - 79%):** Displays an orange warning triangle.
- ❌ **Critical (< 40%):** Displays a red error circle.

---

## 🛠 Features

- **Built with OWL:** Leveraging the latest Odoo Web Library for maximum performance.
- **Fully Reactive:** Instant UI updates without page refresh.
- **Bootstrap Native:** Seamless integration with Odoo's standard design language.
- **Easy Deployment:** No complex configuration needed.

---

## 🚀 Installation

1. Clone or download this repository.
2. Place the `owl_smart_indicator` folder into your Odoo **addons** directory.
3. Restart your Odoo server.
4. Activate **Developer Mode** in Odoo.
5. Go to **Apps** > **Update Apps List**.
6. Search for "OWL Smart Status Indicator" and click **Install**.

---

## 💻 Usage

To use this widget, simply add the `widget="status_indicator"` attribute to any numeric field in your XML views (Form, Tree, or Kanban).

### Example:
```xml
<record id="view_order_form_inherit" model="ir.ui.view">
    <field name="name">sale.order.form.inherit</field>
    <field name="model">sale.order</field>
    <field name="inherit_id" ref="sale.view_order_form"/>
    <field name="arch" type="xml">
        <field name="amount_total" position="after">
            <field name="delivery_score" widget="status_indicator"/>
        </field>
    </field>
</record>