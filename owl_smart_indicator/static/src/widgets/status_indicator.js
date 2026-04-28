import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { standardWidgetProps } from "@web/views/widgets/standard_widget_props";

export class StatusIndicator extends Component {
    static template = "owl_status_indicator.StatusIndicatorTemplate";
    static props = { ...standardWidgetProps };

    get statusConfig() {
        const value = this.props.record.data[this.props.name];

        if (value >= 80) {
            return { color: "text-success", icon: "fa-check-circle" };
        } else if (value >= 40) {
            return { color: "text-warning", icon: "fa-exclamation-triangle" };
        } else {
            return { color: "text-danger", icon: "fa-times-circle" };
        }
    }
}

registry.category("fields").add("status_indicator", {
    component: StatusIndicator,
});
